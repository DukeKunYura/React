import React from 'react';
import useJsonFetch from "../hooks/useJsonFetch.js"

export default function HookUser(props) {
  const { url } = props

  const [data, loading, error] = useJsonFetch(url)

  return (
    <div>
      {loading ? <progress /> : JSON.stringify(data)}
      {error && error}
    </div>
  )
}
