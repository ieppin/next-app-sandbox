import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AxiosError } from "axios";
import { FC, ReactNode, useState } from "react";
import { toast } from "react-hot-toast";

type Props = {
  children: ReactNode
}
const AppQueryProvider: FC<Props> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        retry: (failureCount, error: any) => {
          // リトライしない
          return false
        },
        onError: (error) => {
          if (error instanceof AxiosError) {
            toast.error('APIの呼び出しに失敗しました。')
          }
        }
      },
      mutations: {
        retry: (failureCount, error: any) => {
          // リトライしない
          return false
        },
        onError: async (error) => {
          if (error instanceof AxiosError) {
            return new Promise<void>((resolve, _reject) => {
              toast.error('APIの呼び出しに失敗しました。')
              resolve()
            })
          }
        }
      }
    }
  }))

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default AppQueryProvider