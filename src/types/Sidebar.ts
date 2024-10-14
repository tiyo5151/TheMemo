import { Scrap } from './app';

interface SidebarProps {
  scrap: Scrap[] | null;
  setScrap: React.Dispatch<React.SetStateAction<Scrap[] | null>>;
  onAddScrap: () => void;
  onDeleteScrap: (id: string) => void;
}

export type { SidebarProps };
