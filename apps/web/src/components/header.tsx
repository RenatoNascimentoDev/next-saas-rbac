import SaasIcon from '@/assets/SaaS.svg'

import Image from 'next/image'

import { ProfileButton } from './profile-button'

export function Header() {
  return (
    <div className="mx-auto flex max-w-[1200px] items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src={SaasIcon} alt="SaaS Icon" />
      </div>

      <div className="itme-center flex gap-4">
        <ProfileButton />
      </div>
    </div>
  )
}
