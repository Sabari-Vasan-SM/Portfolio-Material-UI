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
      <DialogContent className="max-w-full h-[80vh] p-6 flex flex-col bg-gray-50 rounded-lg shadow-lg">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-center text-xl font-bold text-purple-700">
            Sabarivasan's Resume
          </DialogTitle>
          <p className="text-center text-sm text-gray-600">
            Preview and download the resume below.
          </p>
        </DialogHeader>
        <div className="flex-grow overflow-hidden border rounded-lg shadow-md bg-white">
          {typeof window !== "undefined" && window.innerWidth > 768 ? (
            <iframe
              src="/Sabarivasan_Resume.pdf"
              className="w-full h-full rounded-md"
              title="Resume"
              style={{ minHeight: "300px" }}
            />
          ) : (
            <img
              src="/Sabarivasan_Resume_Image.png" // Replace with the image path
              alt="Resume Preview"
              className="w-auto h-full max-w-full max-h-full rounded-md object-contain"
            />
          )}
        </div>
        <DialogFooter className="justify-center mt-6">
          <Button asChild className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            <a
              href="/Sabarivasan_Resume.pdf"
              download="Sabarivasan_Resume.pdf"
              className="w-full text-center font-medium"
            >
              Download PDF
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
