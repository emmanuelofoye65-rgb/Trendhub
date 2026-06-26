ALTER TABLE public.orders ADD COLUMN IF NOT EXISTS variants JSONB;

DROP FUNCTION IF EXISTS public.get_order_public(uuid);
CREATE FUNCTION public.get_order_public(_id uuid)
 RETURNS TABLE(id uuid, status order_status, unique_amount integer, base_amount integer, product_id uuid, sender_name text, variants jsonb, created_at timestamp with time zone, paid_at timestamp with time zone)
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path TO 'public'
AS $$
  SELECT id, status, unique_amount, base_amount, product_id, sender_name, variants, created_at, paid_at FROM public.orders WHERE id = _id
$$;
GRANT EXECUTE ON FUNCTION public.get_order_public(uuid) TO anon, authenticated;
