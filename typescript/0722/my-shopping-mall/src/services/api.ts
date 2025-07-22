import type { Product } from '../types/index';

const BASE_URL = 'https://dev.wenivops.co.kr/services/fastapi-crud/1/product'

export async function fetchAllProducts(): Promise<Product[]> {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data: Product[] = await response.json();
    return data;
}