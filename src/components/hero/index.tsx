// import { Grid, OrbitControls } from '@react-three/drei';
// import { Canvas, useFrame, useThree } from '@react-three/fiber';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import React, { useRef } from 'react';
// import * as THREE from 'three';

// import Button from '@/components/buttons/Button';

// // import whatsapp from "../../../public/models/whatsapp.png"

// const ChatBubble: React.FC<{ position: [number, number, number] }> = ({
//   position,
// }) => {
//   const mesh = useRef<THREE.Mesh>(null);

//   useFrame(({ clock }) => {
//     if (mesh.current) {
//       mesh.current.position.y += Math.sin(clock.getElapsedTime() * 0.3) * 0.001;
//       mesh.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.2) * 0.2;
//     }
//   });

//   return (
//     <mesh ref={mesh} position={position} scale={[0.5, 0.3, 0.5]}>
//       <sphereGeometry args={[1, 32, 32]} />
//       <meshStandardMaterial
//         color='#64ffda'
//         emissive='#00b4d8'
//         emissiveIntensity={0.5}
//         roughness={0.2}
//         metalness={0.6}
//       />
//     </mesh>
//   );
// };

// const InteractiveGrid = () => {
//   const gridRef = useRef<THREE.Mesh>(null);
//   const { mouse } = useThree(); // Get mouse position in normalized device coordinates (NDC)

//   // Update grid position based on cursor movement
//   useFrame(() => {
//     if (gridRef.current) {
//       const targetX = mouse.x * 10;
//       const targetY = mouse.y * 5;

//       // Smoothly interpolate the position
//       gridRef.current.position.lerp(
//         new THREE.Vector3(targetX, targetY, 0),
//         0.1 // Adjust this value (0.1 = slower, 0.9 = faster)
//       );
//     }
//   });

//   return (
//     <Grid
//       ref={gridRef}
//       args={[20, 20]}
//       cellSize={2}
//       cellColor='#00b4d8'
//       sectionSize={1}
//       sectionColor='#64ffda'
//       fadeDistance={6}
//       fadeFrom={10}
//       fadeStrength={2}
//       position={[0, -2, 0]}
//       rotation={[Math.PI / 2, 0, 0]}
//     />
//   );
// };

// const FloatingIcon: React.FC<{ src: any; position: [number, number] }> = ({
//   src,
//   position,
// }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const { mouse } = useThree();

//   useFrame(() => {
//     if (ref.current) {
//       const offsetX = mouse.x * 5;
//       const offsetY = mouse.y * 5;
//       ref.current.style.transform = `translate(${position[0] + offsetX}px, ${
//         position[1] + offsetY
//       }px)`;
//     }
//   });

//   return (
//     <div ref={ref} className='absolute transition-transform duration-300'>
//       <Image
//         src={src}
//         width={100}
//         height={100}
//         alt='icon'
//         className='h-28 w-28 md:h-40 md:w-40'
//       />
//     </div>
//   );
// };

// const HeroSection: React.FC = () => {
//   return (
//     <div className='relative h-screen w-full overflow-hidden border border-black bg-[#0a192f]'>
//       {/* Grid Background Animation */}

//       {/* Overlay Content */}
//       <div className='absolute inset-0 z-10 flex flex-col items-center justify-center text-center'>
//         <motion.h1
//           className='text-5xl font-bold leading-tight text-white md:text-7xl'
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <span className='bg-gradient-to-r from-[#64ffda] to-[#00b4d8] bg-clip-text text-transparent'>
//             The <span className='text-8xl'>AI</span> Assistant
//           </span>
//           <br />
//           your business deserves
//         </motion.h1>

//         <motion.p
//           className='mt-6 max-w-2xl text-xl font-bold text-[#8892b0]'
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           Elevate your sales with Ulai, the AI customer support assistant.
//         </motion.p>

//         <motion.div
//           className='mt-8 flex space-x-4'
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 1 }}
//         >
//           <Button className='rounded-lg border-2 border-[#64ffda] px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:bg-[#64ffda] hover:text-[#0a192f]'>
//             Start a Free Trial
//           </Button>
//           <Button className='rounded-lg bg-[#64ffda] px-8 py-4 text-lg font-bold text-[#0a192f] transition-all hover:scale-105 hover:bg-[#52e3d4]'>
//             Book a Demo
//           </Button>
//         </motion.div>
//         <motion.div className='mt-8 flex space-x-4 text-[#8892b0]'>
//           <div>No credit cards. 30-day money back guarantee</div>
//         </motion.div>
//       </div>

//       {/* 3D Background Animation */}
//       <Canvas camera={{ position: [0, 0, 5] }} className='absolute inset-0 z-0'>
//         {/* <FloatingIcon src={shopify} position={[100, 100]} /> */}

//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <InteractiveGrid />
//         <OrbitControls enableZoom={false} />
//       </Canvas>

//       {/* Subtle Glow Effect */}
//       <div className='bg-gradient-radial absolute inset-0 from-[#00b4d8] via-transparent to-transparent opacity-20 blur-3xl'></div>
//     </div>
//   );
// };

// export default HeroSection;

import React from 'react';

import { products } from '@/lib/data';

import { HeroParallax } from '@/components/hero/heroParallax';

// export function HeroSection() {
//   return (
//     <div className='bg-grid-white/[0.02] relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center'>
//       <Spotlight
//         className='-top-40 left-0 md:-top-20 md:left-60'
//         fill='white'
//       />
//       <div className=' relative z-10  mx-auto w-full max-w-7xl  p-4 pt-20 md:pt-0'>
//         <h1 className='bg-opacity-50 bg-gradient-to-b from-green-500 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl'>
//           The AI Assistant <br /> Your Business Deserves.
//         </h1>
//         <p className='mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300'>
//           Spotlight effect is a great way to draw attention to a specific part
//           of the page. Here, we are drawing the attention towards the text
//           section of the page. I don&apos;t know why but I&apos;m running out of
//           copy.
//         </p>
//       </div>
//     </div>
//   );
// }

// export const Spotlight = ({ className, fill }: SpotlightProps) => {
//   return (
//     <svg
//       className={cn(
//         'animate-spotlight pointer-events-none absolute z-[1]  h-[169%] w-[138%] opacity-0 lg:w-[84%]',
//         className
//       )}
//       xmlns='http://www.w3.org/2000/svg'
//       viewBox='0 0 3787 2842'
//       fill='none'
//     >
//       <g filter='url(#filter)'>
//         <ellipse
//           cx='1924.71'
//           cy='273.501'
//           rx='1924.71'
//           ry='273.501'
//           transform='matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)'
//           fill={fill || 'white'}
//           fillOpacity='0.21'
//         ></ellipse>
//       </g>
//       <defs>
//         <filter
//           id='filter'
//           x='0.860352'
//           y='0.838989'
//           width='3785.16'
//           height='2840.26'
//           filterUnits='userSpaceOnUse'
//           colorInterpolationFilters='sRGB'
//         >
//           <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
//           <feBlend
//             mode='normal'
//             in='SourceGraphic'
//             in2='BackgroundImageFix'
//             result='shape'
//           ></feBlend>
//           <feGaussianBlur
//             stdDeviation='151'
//             result='effect1_foregroundBlur_1065_8'
//           ></feGaussianBlur>
//         </filter>
//       </defs>
//     </svg>
//   );
// };

export function HeroSection() {
  return <HeroParallax products={products} />;
}

export default HeroSection;
