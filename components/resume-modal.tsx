"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Sabarivasan's Resume</DialogTitle>
        </DialogHeader>
        <div className="flex-grow">
          <iframe
            src="/Sabarivasan_Resume.pdf"
            className="w-full h-full"
            title="Resume"
          />
        </div>
        <DialogFooter className="sm:justify-between">
          <Button asChild>
            <a href="/Sabarivasan_Resume.pdf" download="Sabarivasan_Resume.pdf">
              Download PDF
            </a>
          </Button>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
