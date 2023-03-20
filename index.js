import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.10.0"

const supabaseUrl = 'https://laicjuordudizaoukukg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhaWNqdW9yZHVkaXphb3VrdWtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxMzI5MzgsImV4cCI6MTk5MzcwODkzOH0.6RVFmMqlii7oCPwuLFHfzOzbAfWtDtFzFDh9dN8jpmM'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: Books, error } = await supabase
  .from('Books')
  .select('*')
 
  for (let book of Books) {
    let bookTable = document.getElementById('books');
      bookTable.innerHTML += `<tr> 
      <td>${book.title} </td>
      <td>${book.author}</td>
      <td>${book.ISBN}</td>          
      </tr>`;
    }
}

getBooks()
