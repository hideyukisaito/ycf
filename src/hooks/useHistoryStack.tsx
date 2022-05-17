// Workaround for history management
// https://github.com/remix-run/react-router/discussions/8782#discussioncomment-2580895

import { useEffect, useState } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

export const useHistoryStack = () => {
  const [stack, setStack] = useState<string[]>([])
  const { pathname } = useLocation()
  const type = useNavigationType()

  useEffect(() => {
    if (type === 'POP') {
      setStack(stack.slice(0, stack.length - 1));
    } else if (type === 'PUSH') {
      setStack([...stack, pathname]);
    } else {
      setStack([...stack.slice(0, stack.length - 1), pathname]);
    }
  }, [pathname, type]);

  return stack;
}
