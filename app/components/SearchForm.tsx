import {useRef, useEffect} from 'react';
import {Form, useNavigate, type FormProps} from 'react-router';

type SearchFormProps = Omit<FormProps, 'children'> & {
  children: (args: {
    inputRef: React.RefObject<HTMLInputElement>;
  }) => React.ReactNode;
};

/**
 * Search form component that sends search requests to the `/search` route.
 * @example
 * ```tsx
 * <SearchForm>
 *  {({inputRef}) => (
 *    <>
 *      <input
 *        ref={inputRef}
 *        type="search"
 *        defaultValue={term}
 *        name="q"
 *        placeholder="Search…"
 *      />
 *      <button type="submit">Search</button>
 *   </>
 *  )}
 *  </SearchForm>
 */
export function SearchForm({children, ...props}: SearchFormProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  useFocusOnCmdK(inputRef);
  
  if (typeof children !== 'function') {
    return null;
  }
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchTerm = formData.get('q');
    
    if (searchTerm) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.toString())}`);
    }
  };
  
  return (
    <Form method="get" action="/search" onSubmit={handleSubmit} {...props}>
      {children({inputRef})}
    </Form>
  );
}

/**
 * Focuses the input when cmd+k is pressed
 */
function useFocusOnCmdK(inputRef: React.RefObject<HTMLInputElement>) {
  // focus the input when cmd+k is pressed
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'k' && event.metaKey) {
        event.preventDefault();
        inputRef.current?.focus();
      }
      if (event.key === 'Escape') {
        inputRef.current?.blur();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [inputRef]);
}
