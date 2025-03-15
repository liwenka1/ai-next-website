export interface BigmodelGenerationsResponse {
  id: string;
  model: string;
  request_id: string;
  task_status: string;
}

export interface BigmodelGenerationsRequest {
  prompt: string;
  image_url: string;
  with_audio?: boolean;
}

export interface AsyncResultRequest {
  id: string;
}

export interface AsyncResultResponse {
  model: string;
  request_id: string;
  task_status: string;
  video_result: VideoResult[];
}

export interface VideoResult {
  cover_image_url: string;
  url: string;
}
