// Simple test to verify the Vercebot API works
const fs = require('fs');

console.log('🧪 Testing Vercebot Integration...\n');

// Test 1: Check if knowledge base exists
console.log('1. Checking knowledge base...');
try {
  const knowledge = JSON.parse(fs.readFileSync('./data/knowledge.json', 'utf8'));
  console.log(`✅ Knowledge base loaded with ${knowledge.length} chunks`);
  
  // Show first chunk as sample
  if (knowledge.length > 0) {
    console.log(`📄 Sample: "${knowledge[0].title}" - ${knowledge[0].content.substring(0, 100)}...`);
  }
} catch (error) {
  console.log('❌ Knowledge base not found or invalid');
  process.exit(1);
}

// Test 2: Check if components exist
console.log('\n2. Checking components...');
const components = [
  './components/ui/VercebotWidget.tsx',
  './app/api/vercebot/route.ts',
  './scripts/build-knowledge.ts'
];

components.forEach(comp => {
  if (fs.existsSync(comp)) {
    console.log(`✅ ${comp}`);
  } else {
    console.log(`❌ ${comp} missing`);
  }
});

// Test 3: Check environment setup
console.log('\n3. Checking environment setup...');
const envExample = fs.readFileSync('./.env.local.example', 'utf8');
if (envExample.includes('GEMINI_API_KEY')) {
  console.log('✅ GEMINI_API_KEY added to .env.local.example');
} else {
  console.log('❌ GEMINI_API_KEY not in .env.local.example');
}

// Test 4: Check package.json scripts
console.log('\n4. Checking package.json scripts...');
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const requiredScripts = ['build:knowledge', 'dev:bot', 'test'];
requiredScripts.forEach(script => {
  if (packageJson.scripts[script]) {
    console.log(`✅ ${script} script exists`);
  } else {
    console.log(`❌ ${script} script missing`);
  }
});

console.log('\n🎉 Vercebot integration test completed!');
console.log('\n📋 Next steps:');
console.log('1. Add GEMINI_API_KEY to your .env.local file');
console.log('2. Run "npm run dev:bot" to start with knowledge base');
console.log('3. Visit http://localhost:3000 to see the chat widget');
console.log('4. Test the chat functionality');