import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

function App() {
  const [open, setOpen] = useState<boolean>(false)

  const handleConfirm = (): void => {
    alert("Action confirmed!")
    setOpen(false)
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="default" className="px-6 py-3 text-lg">
            Open Modal
          </Button>
        </DialogTrigger>

        <DialogContent className="bg-gray-800 text-white rounded-lg p-6">
          <DialogHeader>
            <DialogTitle className="text-xl">Confirmation</DialogTitle>
          </DialogHeader>

          <p className="mt-4 mb-6 text-gray-300">
            Are you sure you want to proceed with this action?
          </p>

          <DialogFooter className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="default" onClick={handleConfirm}>
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default App
