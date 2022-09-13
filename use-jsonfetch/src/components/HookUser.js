import React from 'react';
import useJsonFetch from "../hooks/useJsonFetch.js";

/**
 * Компонент получает в props url, делает fetch запрос используя кастомный хук useJsonFetch
 * и рендерит в строку результат запроса
 */
export default function HookUser(props) {
  const { url } = props

  const [data, loading, error] = useJsonFetch(url)

  return (
    <div>
      {loading ? <progress /> : JSON.stringify(data) + (error && error)}
    </div>
  )
}
