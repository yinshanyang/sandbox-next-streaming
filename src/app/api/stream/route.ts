import { randomBytes } from 'crypto'

export const GET = async () => {
  const buffer = randomBytes(24 * 1024 * 1024)
  const blob = new Blob([buffer])
  const stream = blob.stream()

  console.log('GET /api/stream')

  return new Response(stream, {
    status: 200,
    headers: {
      'Content-Type': 'application/zip',
    },
  })
}
