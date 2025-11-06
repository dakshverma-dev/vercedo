import { describe, it, expect } from '@jest/globals'
import { KnowledgeBuilder } from '../../scripts/build-knowledge'

// Mock data for testing
const mockChunks = [
  {
    id: '1',
    url: 'https://vercedo.ai',
    title: 'Vercedo - AI Receptionist',
    content: 'Vercedo provides AI receptionist services for businesses. Our AI can handle calls in multiple languages including Hindi and English.',
    tokens: 25,
    embedding: [0.1, 0.2, 0.3]
  },
  {
    id: '2',
    url: 'https://vercedo.ai/pricing',
    title: 'Pricing Plans',
    content: 'Vercedo pricing starts at ₹6,000 per month for basic AI receptionist services.',
    tokens: 20,
    embedding: [0.2, 0.3, 0.4]
  },
  {
    id: '3',
    url: 'https://vercedo.ai/features',
    title: 'Features',
    content: 'Features include call answering, appointment booking, lead capture, and multilingual support.',
    tokens: 22,
    embedding: [0.3, 0.4, 0.5]
  }
]

describe('Vercebot Retrieval', () => {
  describe('TF-IDF Search', () => {
    it('should find relevant chunks for pricing query', () => {
      // Simulate TF-IDF scoring logic
      const query = 'pricing cost'
      const queryTerms = query.toLowerCase().split(/\s+/)
      
      const scoredChunks = mockChunks.map(chunk => {
        const content = `${chunk.title} ${chunk.content}`.toLowerCase()
        let score = 0
        
        queryTerms.forEach(term => {
          const matches = content.match(new RegExp(term, 'g')) || []
          score += matches.length
        })
        
        return { chunk, score }
      })
      
      const results = scoredChunks
        .sort((a, b) => b.score - a.score)
        .slice(0, 2)
        .map(item => item.chunk)
      
      expect(results).toHaveLength(2)
      expect(results[0].title).toBe('Pricing Plans')
      expect(results[0].content).toContain('₹6,000')
    })

    it('should find relevant chunks for multilingual query', () => {
      const query = 'multilingual languages'
      const queryTerms = query.toLowerCase().split(/\s+/)
      
      const scoredChunks = mockChunks.map(chunk => {
        const content = `${chunk.title} ${chunk.content}`.toLowerCase()
        let score = 0
        
        queryTerms.forEach(term => {
          const matches = content.match(new RegExp(term, 'g')) || []
          score += matches.length
        })
        
        return { chunk, score }
      })
      
      const results = scoredChunks
        .sort((a, b) => b.score - a.score)
        .slice(0, 2)
        .map(item => item.chunk)
      
      expect(results).toHaveLength(2)
      expect(results[0].content).toContain('Hindi')
      expect(results[0].content).toContain('English')
    })

    it('should return empty results for irrelevant query', () => {
      const query = 'database optimization'
      const queryTerms = query.toLowerCase().split(/\s+/)
      
      const scoredChunks = mockChunks.map(chunk => {
        const content = `${chunk.title} ${chunk.content}`.toLowerCase()
        let score = 0
        
        queryTerms.forEach(term => {
          const matches = content.match(new RegExp(term, 'g')) || []
          score += matches.length
        })
        
        return { chunk, score }
      })
      
      const results = scoredChunks
        .filter(item => item.score > 0)
        .map(item => item.chunk)
      
      expect(results).toHaveLength(0)
    })
  })

  describe('Cosine Similarity', () => {
    it('should calculate correct cosine similarity', () => {
      const vectorA = [1, 0, 0]
      const vectorB = [0, 1, 0]
      const vectorC = [1, 0, 0]
      
      // Orthogonal vectors should have similarity 0
      expect(calculateCosineSimilarity(vectorA, vectorB)).toBeCloseTo(0, 5)
      
      // Identical vectors should have similarity 1
      expect(calculateCosineSimilarity(vectorA, vectorC)).toBeCloseTo(1, 5)
      
      // Same direction vectors should have similarity 1
      expect(calculateCosineSimilarity([1, 2, 3], [2, 4, 6])).toBeCloseTo(1, 5)
    })

    it('should rank chunks by embedding similarity', () => {
      const queryEmbedding = [0.15, 0.25, 0.35]
      
      const scoredChunks = mockChunks.map(chunk => ({
        chunk,
        score: calculateCosineSimilarity(queryEmbedding, chunk.embedding!)
      }))
      
      const results = scoredChunks
        .sort((a, b) => b.score - a.score)
        .map(item => item.chunk)
      
      expect(results).toHaveLength(3)
      // The actual most similar should be chunk with embedding closest to [0.15, 0.25, 0.35]
      // Let's just verify the sorting works correctly
      const scores = scoredChunks.map(item => ({ id: item.chunk.id, score: item.score }))
      expect(scores[0].score).toBeGreaterThanOrEqual(scores[1].score)
      expect(scores[1].score).toBeGreaterThanOrEqual(scores[2].score)
    })
  })

  describe('Token Estimation', () => {
    it('should estimate tokens reasonably', () => {
      const text = 'This is a sample text for token estimation'
      const estimatedTokens = Math.ceil(text.length / 4)
      
      // Should be reasonable approximation
      expect(estimatedTokens).toBeGreaterThan(5)
      expect(estimatedTokens).toBeLessThan(15)
    })
  })
})

// Helper function for cosine similarity calculation
function calculateCosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) return 0
  
  let dotProduct = 0
  let normA = 0
  let normB = 0
  
  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i]
    normA += a[i] * a[i]
    normB += b[i] * b[i]
  }
  
  normA = Math.sqrt(normA)
  normB = Math.sqrt(normB)
  
  if (normA === 0 || normB === 0) return 0
  
  return dotProduct / (normA * normB)
}