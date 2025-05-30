"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { UsersRound } from "lucide-react";
import { useUserRole } from "@/hooks/useUserRole";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

function InterviewerButton() {
  const { isCandidate, isLoading } = useUserRole();
  const [open, setOpen] = useState(false);

  if (!isCandidate || isLoading) return null;

  return (
    <>
      <Button
        className="gap-2 font-medium"
        variant={"secondary"}
        size={"sm"}
        onClick={() => setOpen(true)}
      >
        <UsersRound  className="size-4" />
        Login as Interviewer
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Test as Interviewer</DialogTitle>
            <DialogDescription>
              To test the interviewer view, please logout and login again using
              the following credentials:
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 space-y-2 text-sm">
            <p>
              <strong>Email:</strong> interviewer@test.com
            </p>
            <p>
              <strong>Password:</strong> test1234
            </p>
          </div>

          <DialogFooter className="mt-4">
            <Button onClick={() => setOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default InterviewerButton;
