export interface SearchResult {
  id: number;
  title: string;
  description: string;
}

export interface SearchBarProps {
  onSelect?: (result: SearchResult) => void;
  placeholder?: string;
  minSearchLength?: number;
  debounceMs?: number;
}
