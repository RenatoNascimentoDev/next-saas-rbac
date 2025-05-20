import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

export function ProjectList() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Projeto 01</CardTitle>
          <CardDescription className="line-clamp-3 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            officia veniam adipisci maxime itaque reiciendis? Ut, officiis
            nostrum facilis commodi, eaque nam recusandae esse iure vitae
            tempora dolorum corrupti suscipit.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center gap-1.5">
          <Avatar className="size-4">
            <AvatarImage src="https://avatars.githubusercontent.com/u/90713455?v=4"></AvatarImage>
            <AvatarFallback />
          </Avatar>
          <span className="text-xs text-muted-foreground">
            Created by{' '}
            <span className="font-medium text-foreground">Renato</span> a day
            ago
          </span>

          <Button size="xs" variant="outline" className="ml-auto">
            View <ArrowRight className="ml-2 size-3" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
