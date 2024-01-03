import { Dispatch, SetStateAction, useEffect, useState } from 'react'

/**
 * @description 로컬스토리지의 값을 반환하고 저장하는 hook
 * @param key 로컬 스토리지 key
 * @param initialValue 초기 값
 * @returns [storedValue, setValue] - 로컬 스토리지에 저장된 값, 저장 함수
 */
export default function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, Dispatch<SetStateAction<T>>] {
  const [hasMounted, setHasMounted] = useState(false)
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setHasMounted(true)
  }, [])
  if (hasMounted) {
    return [storedValue, setValue]
  }
  return [initialValue, setValue]
}
