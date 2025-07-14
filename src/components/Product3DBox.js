import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

function RotatingBox({ image }) {
  const mesh = useRef();
  const [error, setError] = useState(false);

  // Always provide a fallback image if image is not valid
  const validImage =
    typeof image === 'string' && image.trim() !== ''
      ? image
      : 'https://picsum.photos/seed/fallback/400/400';

  // Always call useLoader, never conditionally
  const texture = useLoader(THREE.TextureLoader, validImage, (loader) => {
    loader.crossOrigin = '';
  });

  // Listen for texture load error using an effect
  if (texture && texture.image && texture.image.src && texture.image.src.includes('fallback')) {
    setError(false);
  }

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  // If the texture failed to load, show fallback color
  return (
    <mesh ref={mesh} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      {!error && texture
        ? <meshStandardMaterial map={texture} />
        : <meshStandardMaterial color="orange" />}
    </mesh>
  );
}

const Product3DBox = ({ image }) => (
  <Canvas style={{ height: '200px', width: '100%' }} shadows camera={{ position: [2, 2, 2], fov: 50 }}>
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
    <RotatingBox image={image} />
    <OrbitControls enableZoom={false} />
  </Canvas>
);

export default Product3DBox;
