export const API_BASE_URL = 'https://aviasales-test-api.kata.academy/'

export const fetchSearchId = async () => {
  const response = await fetch(`${API_BASE_URL}search`)
  if (!response.ok) throw new Error('Failed to get searchId')
  return await response.json()
}

export const fetchTicketsBatch = async (searchId) => {
  const response = await fetch(`${API_BASE_URL}tickets?searchId=${searchId}`)
  if (!response.ok) throw new Error('Failed to fetch tickets batch')
  return await response.json()
}
