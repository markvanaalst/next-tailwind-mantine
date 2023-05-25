import Image from 'next/image';
import { Inter } from 'next/font/google';
import { ThemeButton } from '@/components/ThemeButton';
import { Button, SegmentedControl } from '@mantine/core';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className={`flex flex-col items-center justify-between p-24 ${inter.className}`}>
			<ThemeButton />

			<div className="p-24">
				<h1 className="dark:text-white text-xl mb-24">Next.js + TailwindCSS + Mantine</h1>

				<SegmentedControl
					data={[
						{ label: 'React', value: 'react' },
						{ label: 'Angular', value: 'ng' },
						{ label: 'Vue', value: 'vue' },
						{ label: 'Svelte', value: 'svelte' },
					]}
				/>
			</div>
		</main>
	);
}
