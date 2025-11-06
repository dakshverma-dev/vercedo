# VerceBot - AI Chatbot Integration

VerceBot is a Gemini-powered AI chatbot that provides contextual answers about Vercedo's AI receptionist services using only the Gemini API credit - no external database required.

## Features

- **Zero External Database**: Uses static knowledge JSON built at build-time
- **Contextual Answers**: Provides responses based on your site's content with citations
- **Streaming Responses**: Real-time streaming chat interface
- **RAG Implementation**: Retrieval-Augmented Generation with TF-IDF/BM25 or Gemini embeddings
- **Secure API Proxy**: Gemini API key never exposed client-side
- **Local Memory**: Short-term conversation history stored in localStorage
- **Demo Integration**: Seamlessly integrates with Cal.com for demo bookings

## Environment Setup

1. **Add Gemini API Key to your environment:**

```bash
# .env.local
GEMINI_API_KEY=your_gemini_api_key_here
```

2. **Get your Gemini API key:**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Add it to your `.env.local` file

## Local Development

### Quick Start

1. **Build the knowledge base:**
```bash
npm run build:knowledge
```

2. **Start development server:**
```bash
npm run dev:bot
```

This will build the knowledge base and start the Next.js development server.

### Development Commands

```bash
# Build knowledge base only
npm run build:knowledge

# Build knowledge base without embeddings
npm run build:knowledge -- --no-embeddings

# Start development with knowledge build
npm run dev:bot

# Regular development (no knowledge build)
npm run dev

# Run tests
npm run test

# Run tests with coverage
npm run test:coverage
```

## Knowledge Base

### How it Works

1. **Crawling**: The build script crawls your Vercedo site (same-origin links up to depth 3)
2. **Content Extraction**: Extracts title and main content, stripping navigation/footer
3. **Chunking**: Splits content into ~1000 token chunks with 200 token overlap
4. **Storage**: Saves to `data/knowledge.json` with optional embeddings

### Building Knowledge Base

The knowledge base is built automatically during the build process, but you can rebuild it manually:

```bash
# With embeddings (recommended)
npm run build:knowledge

# Without embeddings (faster, less accurate)
npm run build:knowledge -- --no-embeddings
```

### Knowledge Base Structure

```json
[
  {
    "id": "unique_chunk_id",
    "url": "https://vercedo.ai/page",
    "title": "Page Title",
    "content": "Chunk content...",
    "tokens": 1000,
    "embedding": [0.1, 0.2, 0.3, ...] // Optional
  }
]
```

## API Endpoint

### POST /api/vercebot

**Request Body:**
```json
{
  "messages": [
    {"role": "user", "content": "What services do you offer?"},
    {"role": "assistant", "content": "We offer..."}
  ],
  "topK": 6,           // Optional: Number of context chunks (default: 6)
  "useEmbeddings": true // Optional: Use embeddings vs TF-IDF (default: true)
}
```

**Response:**
- Server-Sent Events (SSE) streaming
- Final message includes sources array

### GET /api/vercebot

Returns API status and knowledge base information.

## Frontend Widget

The `VercebotWidget` component provides:

- Floating chat button (bottom-right)
- Streaming chat interface
- Message history in localStorage
- Source citations with links
- Demo booking integration
- Responsive design matching site theme

### Usage

The widget is automatically included in the layout and appears on all pages.

### Customization

Key customization points in `VercebotWidget.tsx`:

- **Suggestions**: Modify the `suggestions` array
- **Styling**: Update Tailwind classes
- **Behavior**: Adjust localStorage settings and message limits

## Retrieval Methods

### TF-IDF/BM25 (Default Fallback)
- Lightweight, no API calls during build
- Term frequency-inverse document frequency scoring
- Good for exact keyword matching

### Gemini Embeddings (Recommended)
- Higher accuracy for semantic similarity
- Uses `text-embedding-004` model
- Cosine similarity for ranking
- Uses Gemini credits during build

## Cost Considerations

### Gemini API Usage

**Build-time (one-time):**
- Embeddings: ~$0.00025 per 1,000 characters
- Typical site: 50-100 chunks = ~$0.01-0.05

**Runtime (per query):**
- gemini-1.5-flash: ~$0.00015 per 1,000 characters
- Typical query: ~500-1000 characters = $0.00008-0.15
- Free tier: $300 credit should handle ~10,000+ queries

### Storage
- Knowledge JSON: Typically 1-5 MB
- No database costs
- Static file serving

## Troubleshooting

### Common Issues

1. **Knowledge base not found:**
   ```bash
   npm run build:knowledge
   ```

2. **Gemini API errors:**
   - Check GEMINI_API_KEY in .env.local
   - Verify API key is valid and has quota

3. **Slow responses:**
   - Try reducing `topK` parameter
   - Use TF-IDF instead of embeddings for faster retrieval

4. **Poor answers:**
   - Rebuild knowledge base: `npm run build:knowledge`
   - Check content quality on crawled pages
   - Consider increasing chunk overlap

### Debug Mode

Enable debug logging by setting:
```bash
DEBUG=vercebot npm run dev
```

## Future Enhancements

Potential improvements (not part of current scope):

- **Analytics**: Query tracking and performance metrics
- **Long-term Memory**: Supabase/KV for conversation persistence
- **Multi-language**: Support for Hindi and other languages
- **Voice Input**: Speech-to-text integration
- **Proactive Chat**: Trigger based on user behavior
- **Admin Panel**: Knowledge base management interface

## Security Notes

- ✅ API key never exposed to client
- ✅ No PII storage in knowledge base
- ✅ Content filtering and sanitization
- ✅ Rate limiting considerations
- ✅ Input validation and sanitization

## Performance Optimization

- Knowledge base loaded once at startup
- Embeddings cached in memory
- Streaming responses for better UX
- LocalStorage for conversation history
- Lazy loading of widget component

## Testing

Run the test suite:
```bash
npm run test
```

Tests cover:
- TF-IDF retrieval accuracy
- Cosine similarity calculations
- Token estimation
- Edge cases and error handling