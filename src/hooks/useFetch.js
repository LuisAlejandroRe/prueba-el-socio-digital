import { useEffect, useRef, useState } from "react"

const useFetch = ( url ) => {

  const isMounted = useRef(true)
  const [state, setState] = useState({ data: null, loading: true, error: null});

  useEffect(() => {
    
    return () => {
      isMounted.current = false
    }
  }, [])
  

  useEffect(() => {

    setState({ data: null, loading: true, error: null });

    if( !url ) {

      setState({ data: null, loading: false, error: 'missing url' });

    } else {

      fetch( url )
        .then( res => res.json() )
        .then( data => {
  
          if (isMounted.current) {
            setState({
              loading: false, 
              error: null,
              data
            })
          }
  
        })
        .catch( () => {
          setState({
            data: null,
            loading: false,
            error: 'Cannot load info'
          })
        })
        
    }
  
  }, [url])

  return state
  
}

export default useFetch