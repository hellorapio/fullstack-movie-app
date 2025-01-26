import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@radix-ui/react-dialog";
import { DialogHeader } from "./Dialog";
import { Button } from "./Button";

export default function AddToFavorite({ imdbId }: { imdbId: string }) {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Fav?</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure? {imdbId}</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
