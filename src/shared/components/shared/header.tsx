'use client';

import { cn } from "@/shared/lib/utils";
import { Container } from "./container";
import Image from "next/image";
import React from "react";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { CartButton, SearchInput } from "./index";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className='flex items-center justify-between py-8'>
        {/* Left side */}
        <Link href='/'>
          <div className='flex items-center gap-4'>
            <Image
              src='/logo.png'
              alt='Logo'
              width={35}
              height={35}
            />
            <div>
              <h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
              <p className='text-sm text-gray-400 leading-3'>Very tasty</p>
            </div>
          </div>
        </Link>

        <div className='mx-10 flex-1'>
          <SearchInput />
        </div>

        {/* Right side */}

        <div className='flex items-center gap-3'>
          <Button
            title='Coming soon'
            variant='outline'
            className='flex items-center gap-1'
            onClick={(e) => {
              e.preventDefault();
              alert("Feature coming soon!");
            }}
          >
            <User size={16} />
            Login
          </Button>

          <CartButton />
        </div>
      </Container>
    </header>
  );
};
