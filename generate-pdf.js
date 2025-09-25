#!/usr/bin/env node

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Extract the TOC structure from myst.yml
const tocStructure = [
  { title: 'Welcome', url: '/' },
  { title: 'Course Policies', url: '/policies/grading-rubric' },
  { title: 'Grading Rubric', url: '/policies/grading-rubric' },
  { title: 'Classroom Policies', url: '/policies/classroom' },
  { title: 'Academic Honesty', url: '/policies/honesty' },
  { title: 'Course Organization', url: '/course-organization' },
  { title: 'Module 1: Introduction', url: '/slos/module1-introduction' },
  { title: 'Module 2: Segregation', url: '/slos/module2-segregation' },
  { title: 'Module 3: Contagion', url: '/slos/module3-contagion' },
  { title: 'Module 4: Cooperation', url: '/slos/module4-cooperation' },
  { title: 'Module 5: Polarization', url: '/slos/module5-polarization' },
  { title: 'NetLogo Tutorial', url: '/netlogo/' },
  { title: 'NetLogo 0: Introduction', url: '/netlogo/0_intro' },
  { title: 'NetLogo 0a: Getting Started', url: '/netlogo/0a_intro' },
  { title: 'NetLogo 0b: Interface Tour', url: '/netlogo/0b_intro' },
  { title: 'NetLogo 0c: First Commands', url: '/netlogo/0c_intro' },
  { title: 'NetLogo 0d: Programming Basics', url: '/netlogo/0d_intro' },
  { title: 'NetLogo 1: Basics', url: '/netlogo/1_basics' },
  { title: 'NetLogo 1a: Variables & Data', url: '/netlogo/1a_basics' },
  { title: 'NetLogo 1b: Control Structures', url: '/netlogo/1b_basics' },
  { title: 'NetLogo 1c: Procedures', url: '/netlogo/1c_basics' },
  { title: 'NetLogo 1d: Lists & Math', url: '/netlogo/1d_basics' },
  { title: 'NetLogo 2: Agents', url: '/netlogo/2_agents' },
  { title: 'NetLogo 2a: Turtles', url: '/netlogo/2a_agents' },
  { title: 'NetLogo 2b: Patches', url: '/netlogo/2b_agents' },
  { title: 'NetLogo 2c: Links', url: '/netlogo/2c_agents' },
  { title: 'NetLogo 2d: Agent Sets', url: '/netlogo/2d_agents' },
  { title: 'NetLogo 2e: Breeds', url: '/netlogo/2e_agents' },
  { title: 'NetLogo 2f: Advanced Agent Operations', url: '/netlogo/2f_agents' },
  { title: 'NetLogo 3: Environment', url: '/netlogo/3_environment' },
  { title: 'NetLogo 3a: World Settings', url: '/netlogo/3a_environment' },
  { title: 'NetLogo 3b: Coordinate System', url: '/netlogo/3b_environment' },
  { title: 'NetLogo 3c: Import/Export', url: '/netlogo/3c_environment' },
  { title: 'NetLogo 3d: Extensions', url: '/netlogo/3d_environment' },
  { title: 'NetLogo 4: First Model', url: '/netlogo/4_first-model' },
  { title: 'NetLogo 4a: Model Structure', url: '/netlogo/4a_first-model' },
  { title: 'NetLogo 4b: Setup Procedures', url: '/netlogo/4b_first-model' },
  { title: 'NetLogo 4c: Go Procedures', url: '/netlogo/4c_first-model' },
  { title: 'NetLogo 4d: Testing & Debugging', url: '/netlogo/4d_first-model' },
  { title: 'NetLogo 5: Data Analysis', url: '/netlogo/5_data-analysis' },
  { title: 'NetLogo 5a: BehaviorSpace', url: '/netlogo/5a_data-analysis' },
  { title: 'NetLogo 5b: Data Export', url: '/netlogo/5b_data-analysis' },
  { title: 'NetLogo 5c: Plotting', url: '/netlogo/5c_data-analysis' },
  { title: 'NetLogo 5d: Statistics', url: '/netlogo/5d_data-analysis' },
  { title: 'NetLogo 6: Advanced Topics', url: '/netlogo/6_advanced' },
  { title: 'NetLogo 6a: Performance', url: '/netlogo/6a_advanced' },
  { title: 'NetLogo 6b: 3D Models', url: '/netlogo/6b_advanced' },
  { title: 'NetLogo 6c: Web Export', url: '/netlogo/6c_advanced' },
  { title: 'NetLogo 6d: Best Practices', url: '/netlogo/6d_advanced' },
  { title: 'Segregation Tutorial', url: '/segregation/tutorial' },
  { title: 'Segregation 1: Setup', url: '/segregation/01_setup' },
  { title: 'Segregation 2: Households', url: '/segregation/02_households' },
  { title: 'Segregation 3: Dynamics', url: '/segregation/03_dynamics' },
  { title: 'Final Project Norms', url: '/final_project_norms' }
];

async function generateCoursePDF() {
  console.log('🚀 Starting PDF generation for Agent-Based Modeling & Social Theory course...');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Set viewport for consistent rendering
  await page.setViewport({ width: 1200, height: 800 });
  
  const baseUrl = 'http://localhost:3000';
  
  console.log('📚 Generating individual page PDFs...');
  
  const pdfPaths = [];
  
  for (let i = 0; i < tocStructure.length; i++) {
    const item = tocStructure[i];
    const url = `${baseUrl}${item.url}`;
    
    console.log(`📖 Processing ${i + 1}/${tocStructure.length}: ${item.title}`);
    
    try {
      await page.goto(url, { 
        waitUntil: 'networkidle0',
        timeout: 30000 
      });
      
      // Wait for any dynamic content to load
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Hide navigation elements for cleaner PDF
      await page.addStyleTag({
        content: `
          .myst-book-toc,
          .myst-book-sidebar,
          .myst-book-nav,
          .navbar,
          nav,
          .btn-download,
          .btn-fullscreen,
          .btn-source,
          .edit-this-page {
            display: none !important;
          }
          .myst-article {
            max-width: none !important;
            margin: 0 !important;
            padding: 20px !important;
          }
          body {
            margin: 0 !important;
            padding: 0 !important;
          }
          @page {
            margin: 1in;
            size: A4;
          }
          h1 {
            page-break-before: always;
          }
          h1:first-child {
            page-break-before: auto;
          }
        `
      });
      
      const filename = `page-${String(i + 1).padStart(3, '0')}-${item.title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}.pdf`;
      const filepath = path.join('_build', 'pdf-temp', filename);
      
      // Ensure directory exists
      fs.mkdirSync(path.dirname(filepath), { recursive: true });
      
      await page.pdf({
        path: filepath,
        format: 'A4',
        printBackground: true,
        margin: {
          top: '1in',
          right: '0.75in',
          bottom: '1in',
          left: '0.75in'
        },
        displayHeaderFooter: true,
        headerTemplate: `
          <div style="font-size: 10px; width: 100%; text-align: center; color: #666; padding: 0 1in;">
            <span style="float: left;">Agent-Based Modeling & Social Theory</span>
            <span style="float: right;">HNRS-251-A</span>
          </div>
        `,
        footerTemplate: `
          <div style="font-size: 10px; width: 100%; text-align: center; color: #666; padding: 0 1in;">
            <span style="float: left;">${item.title}</span>
            <span style="float: right;">Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
          </div>
        `
      });
      
      pdfPaths.push(filepath);
      
    } catch (error) {
      console.warn(`⚠️  Warning: Could not process ${item.title} (${url}): ${error.message}`);
      console.log('   Continuing with next page...');
    }
  }
  
  await browser.close();
  
  console.log(`✅ Generated ${pdfPaths.length} individual PDFs`);
  console.log('📋 Individual PDFs saved to: _build/pdf-temp/');
  
  // Create a summary file listing all generated PDFs
  const summaryPath = path.join('_build', 'pdf-temp', 'README.txt');
  const summary = `Generated PDFs for Agent-Based Modeling & Social Theory Course
Course: HNRS-251-A
Generated: ${new Date().toISOString()}
Total pages processed: ${pdfPaths.length}

Individual PDF files:
${pdfPaths.map((p, i) => `${i + 1}. ${path.basename(p)}`).join('\n')}

To combine these PDFs into a single document, you can use tools like:
- PDFtk: pdftk *.pdf cat output course-complete.pdf
- Python PyPDF2/PyPDF4
- Adobe Acrobat
- Online PDF merger tools

Files are ordered according to the course website structure.`;
  
  fs.writeFileSync(summaryPath, summary);
  
  console.log('📄 Summary written to: _build/pdf-temp/README.txt');
  console.log('');
  console.log('🎉 PDF generation complete!');
  console.log('');
  console.log('Next steps:');
  console.log('1. Check the individual PDFs in _build/pdf-temp/');
  console.log('2. Combine them using a PDF merger tool of your choice');
  console.log('3. The files are already in the correct order for the course');
  
  return pdfPaths;
}

// Main execution
if (require.main === module) {
  generateCoursePDF()
    .then((paths) => {
      console.log(`\n✨ Successfully generated ${paths.length} PDF files`);
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Error generating PDFs:', error);
      process.exit(1);
    });
}

module.exports = { generateCoursePDF };