import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Message1Res } from "../../../pages/api/message1";

export const useMessage1Service = () => {
  const { data, isLoading, error } = useQuery(['message1'],
    async () => {
      return (await axios.get<Message1Res>('/api/message1')).data
    })

  return {
    data, isLoading, error
  }
}

export const useMessage2Service = () => {
  const { data, isLoading, error } = useQuery(['message2'],
    async () => {
      return (await axios.get<Message1Res>('/api/message2')).data
    })

  return {
    data, isLoading, error
  }
}