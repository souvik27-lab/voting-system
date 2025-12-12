import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, CreatePollData } from "./index";

export const useGetPolls = () => {
  return useQuery({
    queryKey: ["polls"],
    queryFn: api.getPolls,
  });
};

export const useGetPoll = (id: string) => {
  return useQuery({
    queryKey: ["poll", id],
    queryFn: () => api.getPollById(id),
    enabled: !!id,
  });
};

export const useCreatePoll = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreatePollData) => api.createPoll(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["polls"] });
    },
  });
};

export const useVotePoll = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (optionId: string) => api.votePoll(id, optionId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["poll", id] });
      queryClient.invalidateQueries({ queryKey: ["polls"] });
    },
  });
};

// 🔥 NEW: delete poll hook
export const useDeletePoll = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => api.deletePoll(id),
    onSuccess: () => {
      // remove deleted poll from cache
      queryClient.invalidateQueries({ queryKey: ["polls"] });
      queryClient.removeQueries({ queryKey: ["poll", id] });
    },
  });
};
