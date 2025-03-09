import { fetchRequest } from "@/request/fetchRequest";

export const useImagesApi = () => {
  const bigmodelGenerations = (prompt: string) => {
    return fetchRequest("/images/bigmodel/generations", {
      data: {
        prompt
      },
      method: "POST"
    });
  };

  return {
    bigmodelGenerations
  };
};
