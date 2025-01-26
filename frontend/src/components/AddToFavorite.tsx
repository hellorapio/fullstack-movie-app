"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import FavoriteForm from "./FavoriteForm";
import { useState } from "react";

export default function AddToFavorite({ imdbId }: { imdbId: string }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Fav?</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add to favorites</DialogTitle>
          <FavoriteForm imdbId={imdbId} setOpen={setOpen} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
