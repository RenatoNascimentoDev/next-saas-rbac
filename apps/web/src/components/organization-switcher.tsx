import { ChevronsUpDown, PlusCircle } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Link from 'next/link'

export function OrganizationSwitcher() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rouded focus-vivble:ring-primary flex w-[168px] items-center gap-2 p-1 text-sm font-medium outline-none focus-visible:ring-2">
        <span className="text-muted-foreground">Select organization</span>
        <ChevronsUpDown className="ml-auto size-4 text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        alignOffset={-16}
        sideOffset={12}
        className="w-[200px]"
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel>Organizations</DropdownMenuLabel>
          <DropdownMenuItem>
            <Avatar className="mr-2 size-4">
              <AvatarImage src="https://app.rocketseat.com.br/_next/image?url=https%3A%2F%2Fxesque.rocketseat.dev%2Fplatform%2F1724266585154.svg&w=96&q=100" />
              <AvatarFallback />
            </Avatar>
            <span className="line-clamp-1">Software as a Servise</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/create-organization">
            <PlusCircle className="mr-2 size-4" />
            Create new
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
