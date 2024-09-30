import { Terminal } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/_components/ui/alert"

export function AlertDemo() {
  return (
    <Alert className="dark:text-white">
      <Terminal className="h-4 w-4 dark:text-white" />
      <AlertTitle className="dark:text-white">Heads up!</AlertTitle>
      <AlertDescription className="dark:text-white">
        Did you know that we are selling exclusive merch?
      </AlertDescription>
    </Alert>
  )
}