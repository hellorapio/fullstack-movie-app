"use client";
import { Favorite } from "@/types";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { postFavorite } from "@/actions/actions";

export default function FavoriteForm({ imdbId }: { imdbId: string }) {
  const form = useForm<Favorite>({
    defaultValues: {
      rate: 0,
      comment: "",
    },
  });

  async function onSubmit(values: Favorite) {
    const data = await postFavorite(
      {
        ...values,
        movieId: imdbId,
      },
      localStorage.getItem("auth") || ""
    );
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="rate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rate</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Rate" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comment</FormLabel>
              <FormControl>
                <Input placeholder="Enter your comment" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
