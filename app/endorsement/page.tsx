'use client';

import Endorsement from '@/components/Endorsement/Endorsement';
import Header from '@/components/Header/Header';

export default function EndorsementPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1d4e77]">
      <Header />
      <Endorsement />
    </div>
  );
}