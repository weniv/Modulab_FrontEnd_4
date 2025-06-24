import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// ----- 특정 방향의 광선(Ray)에 맞은 Mesh 판별하기

// Renderer
const canvas = document.getElementById('three-canvas');
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.y = 1.5;
camera.position.z = 4;
scene.add(camera);

// Light
const ambientLight = new THREE.AmbientLight('white', 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight('white', 2);
directionalLight.position.x = 1;
directionalLight.position.z = 2;
scene.add(directionalLight);

const controls = new OrbitControls(camera, renderer.domElement);

// Mesh
const lineMaterial = new THREE.LineBasicMaterial({ color: 'yellow' });
const points = [];
points.push(new THREE.Vector3(0, 0, 100));
points.push(new THREE.Vector3(0, 0, -100));
const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(lineGeometry, lineMaterial);
scene.add(line);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 'seagreen'
});
const box = new THREE.Mesh(geometry, material);
box.name = 'myBox'; // 레이캐스터에서 확인해보려고 설정한 이름
scene.add(box);

const ball = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 16, 16),
  new THREE.MeshBasicMaterial({ color: 'orange'} )
);
ball.name = 'myBall';
scene.add(ball);

window.addEventListener('resize', setSize);
renderer.setAnimationLoop(animate);

const raycaster = new THREE.Raycaster();

const clock = new THREE.Clock();

function animate() {
  const time = clock.getElapsedTime();

  box.position.y = Math.cos(time) * 2;
  ball.position.x = Math.sin(time) * 2;

  const origin = new THREE.Vector3(0, 0, 100);
  const direction = new THREE.Vector3(0, 0, -100);
  direction.normalize();
  raycaster.set(origin, direction); // ray 세팅

  // console.log(scene.children);
  // 먼저 모든 메쉬의 색상을 녹색으로
  scene.children.forEach(child => {
    if (child.isMesh) {
      child.material.color.set('seagreen');
    }
  });

  // scene.children을 해도 되고, 따로 배열에 Mesh들을 담아서 그 배열을 써도 됨
  const intersects = raycaster.intersectObjects(scene.children);
  for (const item of intersects) {
    if (item.object.isMesh) {
      console.log(item.object.name);
      item.object.material.color.set('hotpink');
    }
  }
  
  renderer.render(scene, camera);
}

function setSize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
}