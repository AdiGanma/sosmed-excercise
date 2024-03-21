"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const HeaderTweet: React.FC = () => {
  const [tweet, setTweet] = useState("");
  return (
    <section>
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <Textarea
          onChange={(e) => setTweet(e.target.value)}
          value={tweet}
          placeholder="Type your tweet here"
          style={{ resize: "none" }}
          maxLength={200}
        />
      </div>
      <p className="text-right my-1 text-xs">{tweet.length}/200</p>
      <div className="justify-end flex">
        <Button className="my-4">Tweet</Button>
      </div>
      <Separator/>
    </section>
  );
};

export default HeaderTweet;
