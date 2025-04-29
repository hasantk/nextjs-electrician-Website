import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Instagram, Search } from "lucide-react";
import React from "react";

const SearchPage = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="p-3 hidden lg:flex bg-red-500 cursor-pointer text-white rounded-full">
          <Search />
        </div>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent className="bg-transparent border-none shadow-none">
          <DialogTitle></DialogTitle>
          <div className="mt-8 flex flex-row items-center justify-center gap-2">
            <Input placeholder="Ara..." className="w-full py-6" />
            <Button className="py-6 bg-red-500 hover:bg-red-600">
              <Search />
            </Button>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default SearchPage;
