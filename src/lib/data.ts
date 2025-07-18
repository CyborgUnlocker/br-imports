import { supabase } from './supabase';
import { Product } from '@/types/index';

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase.from('products').select('*');

  if (error) {
    console.error('Erro ao buscar produtos:', error);
    return [];
  }

  return data as Product[];
}
