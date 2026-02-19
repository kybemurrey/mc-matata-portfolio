CREATE TABLE public.booking_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  event_type TEXT NOT NULL,
  event_date DATE NOT NULL,
  location TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.booking_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert a booking (public form)
CREATE POLICY "Anyone can submit a booking"
  ON public.booking_requests
  FOR INSERT
  WITH CHECK (true);

-- Only service role can read bookings (admin only)
CREATE POLICY "Service role can read bookings"
  ON public.booking_requests
  FOR SELECT
  USING (false);
