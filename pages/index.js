import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
    return (
        <div>
          <h1>Homepage</h1>
          <p>
            Lorem Ipsum dolor sit Lorem Ipsum dolor sit Lorem Ipsum dolor sit Lorem Ipsum dolor sit Lorem Ipsum dolor sit Lorem Ipsum dolor sit Lorem Ipsum dolor sit Lorem Ipsum dolor sit Lorem Ipsum dolor sit Lorem Ipsum dolor sit 
          </p>
          <p>
            Lorem Ipsum dolor sit Lorem Ipsum dolor sit Lorem Ipsum dolor sit Lorem Ipsum dolor sit Lorem Ipsum dolor sit Lorem Ipsum dolor sit Lorem Ipsum dolor sit Lorem Ipsum dolor sit Lorem Ipsum dolor sit Lorem Ipsum dolor sit 
          </p>
          <Link href="/ninjas">See Ninja Listing</Link>
  
        </div>
    )
}
