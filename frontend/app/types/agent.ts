export interface Agent {
  name: string;
  state: "active" | "running" | "idle" | "standby";
  activity: string;
}