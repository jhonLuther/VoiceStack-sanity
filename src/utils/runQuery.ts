import { getClient } from '~/lib/sanity.client'
import { readToken } from '~/lib/sanity.api'

function runQuery(query) {
  const draftMode = false
  const client = getClient(draftMode ? { token: readToken } : undefined)
  return client.fetch(query)
}

export default runQuery
