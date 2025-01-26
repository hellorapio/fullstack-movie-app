import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import FavoriteForm from "./FavoriteForm";

export default function AddToFavorite({ imdbId }: { imdbId: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Fav?</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add to favorites</DialogTitle>
          <FavoriteForm imdbId={imdbId} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
