const topics = [
    {
        id: 0,
        icon: "📦",
        title: "Variáveis e Tipos",
        sub: "O básico de qualquer programa Python",
        explanation: `Em Python não precisas de declarar o tipo da variável — ele é inferido automaticamente. As variáveis mais usadas em concursos são <strong>inteiros</strong>, <strong>strings</strong> e <strong>listas</strong>.`,
        code: `<span class="cm"># Inteiros</span>
n = <span class="nm">10</span>
resultado = <span class="nm">5</span> <span class="op">*</span> <span class="nm">3</span>

<span class="cm"># String</span>
nome = <span class="st">"Angola"</span>
<span class="fn">print</span>(<span class="st">"Olá,"</span>, nome)   <span class="cm"># Olá, Angola</span>

<span class="cm"># Múltiplas variáveis de uma vez</span>
a, b, c = <span class="nm">1</span>, <span class="nm">2</span>, <span class="nm">3</span>

<span class="cm"># Leitura do teclado (muito usada em concursos!)</span>
x = <span class="fn">int</span>(<span class="fn">input</span>())         <span class="cm"># lê um número</span>
a, b = <span class="fn">map</span>(<span class="fn">int</span>, <span class="fn">input</span>().<span class="fn">split</span>())  <span class="cm"># lê dois números</span>`,
        tip: "<strong>Dica de concurso:</strong> A linha <code>a, b = map(int, input().split())</code> é uma das mais usadas em competições. Praticamente todos os problemas começam com ela!",
        exercises: [
            {
                q: "Qual é o output de: <code>a, b = 3, 7 &nbsp; print(a + b)</code>",
                options: ["3", "7", "10", "37"],
                correct: 2,
                feedback: "✅ Correcto! a=3 e b=7, então a+b = 10."
            },
            {
                q: "Para ler dois inteiros numa linha separados por espaço, qual linha usas?",
                options: [
                    "a = int(input()); b = int(input())",
                    "a, b = map(int, input().split())",
                    "a, b = input()",
                    "a = input().split()"
                ],
                correct: 1,
                feedback: "✅ Exacto! <code>map(int, input().split())</code> é a forma mais eficiente e usada em concursos."
            }
        ]
    },
    {
        id: 1,
        icon: "🔁",
        title: "Loops",
        sub: "for, while e iteração eficiente",
        explanation: `Loops são essenciais em concursos — precisas de repetir operações sobre listas, calcular somas, encontrar máximos, etc. Python tem duas formas principais: <strong>for</strong> e <strong>while</strong>.`,
        code: `<span class="cm"># Loop for — percorre uma sequência</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="nm">5</span>):
    <span class="fn">print</span>(i)  <span class="cm"># 0, 1, 2, 3, 4</span>

<span class="cm"># range(inicio, fim, passo)</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="nm">1</span>, <span class="nm">11</span>):
    <span class="fn">print</span>(i)  <span class="cm"># 1 até 10</span>

<span class="cm"># Somar N números lidos do teclado</span>
n = <span class="fn">int</span>(<span class="fn">input</span>())
total = <span class="nm">0</span>
<span class="kw">for</span> _ <span class="kw">in</span> <span class="fn">range</span>(n):
    x = <span class="fn">int</span>(<span class="fn">input</span>())
    total <span class="op">+=</span> x
<span class="fn">print</span>(total)

<span class="cm"># Loop while</span>
x = <span class="nm">10</span>
<span class="kw">while</span> x <span class="op">></span> <span class="nm">0</span>:
    x <span class="op">-=</span> <span class="nm">3</span>
<span class="fn">print</span>(x)  <span class="cm"># -2</span>`,
        tip: "<strong>Dica de concurso:</strong> <code>range(1, n+1)</code> para iterar de 1 até N inclusive. O erro mais comum é esquecer o <code>+1</code> no fim!",
        exercises: [
            {
                q: "Qual é o output de: <code>for i in range(2, 8, 2): print(i)</code>",
                options: ["2 4 6 8", "2 4 6", "2 3 4 5 6 7", "0 2 4 6"],
                correct: 1,
                feedback: "✅ Certo! range(2, 8, 2) começa em 2, passo 2, para antes de 8 → 2, 4, 6."
            },
            {
                q: "Para ler N números e calcular a soma, qual estrutura usas?",
                options: [
                    "while total < n",
                    "for i in range(n) com total += x",
                    "for x in input()",
                    "loop até input() ser 0"
                ],
                correct: 1,
                feedback: "✅ Exacto! for i in range(n) é a forma padrão para ler N valores e acumulá-los."
            }
        ]
    },
    {
        id: 2,
        icon: "📋",
        title: "Listas",
        sub: "A estrutura de dados mais usada",
        explanation: `Listas são a estrutura de dados principal em Python e em concursos. Precisas de saber criar, ordenar, filtrar e percorrer listas eficientemente.`,
        code: `<span class="cm"># Criar lista</span>
nums = [<span class="nm">5</span>, <span class="nm">2</span>, <span class="nm">8</span>, <span class="nm">1</span>, <span class="nm">9</span>]

<span class="cm"># Aceder por índice</span>
<span class="fn">print</span>(nums[<span class="nm">0</span>])    <span class="cm"># 5 (primeiro)</span>
<span class="fn">print</span>(nums[<span class="op">-</span><span class="nm">1</span>])   <span class="cm"># 9 (último)</span>

<span class="cm"># Ordenar</span>
nums.<span class="fn">sort</span>()         <span class="cm"># [1, 2, 5, 8, 9]</span>
nums.<span class="fn">sort</span>(reverse=<span class="kw">True</span>)  <span class="cm"># [9, 8, 5, 2, 1]</span>

<span class="cm"># Funções úteis</span>
<span class="fn">print</span>(<span class="fn">max</span>(nums))    <span class="cm"># 9</span>
<span class="fn">print</span>(<span class="fn">min</span>(nums))    <span class="cm"># 1</span>
<span class="fn">print</span>(<span class="fn">sum</span>(nums))    <span class="cm"># 25</span>
<span class="fn">print</span>(<span class="fn">len</span>(nums))    <span class="cm"># 5</span>

<span class="cm"># Ler lista do teclado (padrão de concurso!)</span>
n = <span class="fn">int</span>(<span class="fn">input</span>())
nums = <span class="fn">list</span>(<span class="fn">map</span>(<span class="fn">int</span>, <span class="fn">input</span>().<span class="fn">split</span>()))`,
        tip: "<strong>Dica de concurso:</strong> <code>list(map(int, input().split()))</code> lê uma linha inteira de números de uma vez. É o padrão para quase todos os problemas com arrays!",
        exercises: [
            {
                q: "Dado <code>nums = [3, 1, 4, 1, 5]</code>, qual é o resultado de <code>max(nums) + len(nums)</code>?",
                options: ["5", "9", "10", "14"],
                correct: 2,
                feedback: "✅ Correcto! max([3,1,4,1,5]) = 5 e len = 5, então 5 + 5 = 10."
            },
            {
                q: "Como acedes ao último elemento de uma lista em Python?",
                options: ["lista[last]", "lista[len-1]", "lista[-1]", "lista.last()"],
                correct: 2,
                feedback: "✅ Exacto! Em Python, índice -1 acede sempre ao último elemento. Muito elegante!"
            }
        ]
    },
    {
        id: 3,
        icon: "🧩",
        title: "Funções",
        sub: "Organizar e reutilizar código",
        explanation: `Funções permitem dividir o problema em partes menores. Em concursos, uma função bem escrita pode ser a diferença entre resolver e não resolver o problema a tempo.`,
        code: `<span class="cm"># Definir uma função</span>
<span class="kw">def</span> <span class="fn">somar</span>(a, b):
    <span class="kw">return</span> a <span class="op">+</span> b

<span class="fn">print</span>(<span class="fn">somar</span>(<span class="nm">3</span>, <span class="nm">7</span>))   <span class="cm"># 10</span>

<span class="cm"># Função para verificar par/ímpar</span>
<span class="kw">def</span> <span class="fn">e_par</span>(n):
    <span class="kw">return</span> n <span class="op">%</span> <span class="nm">2</span> <span class="op">==</span> <span class="nm">0</span>

<span class="fn">print</span>(<span class="fn">e_par</span>(<span class="nm">4</span>))   <span class="cm"># True</span>
<span class="fn">print</span>(<span class="fn">e_par</span>(<span class="nm">7</span>))   <span class="cm"># False</span>

<span class="cm"># Factorial com recursão</span>
<span class="kw">def</span> <span class="fn">factorial</span>(n):
    <span class="kw">if</span> n <span class="op">==</span> <span class="nm">0</span>:
        <span class="kw">return</span> <span class="nm">1</span>
    <span class="kw">return</span> n <span class="op">*</span> <span class="fn">factorial</span>(n <span class="op">-</span> <span class="nm">1</span>)

<span class="fn">print</span>(<span class="fn">factorial</span>(<span class="nm">5</span>))  <span class="cm"># 120</span>`,
        tip: "<strong>Dica de concurso:</strong> O operador <code>%</code> (módulo) é extremamente comum em problemas — verifica paridade, ciclos, últimos dígitos, etc.",
        exercises: [
            {
                q: "O que retorna a função: <code>def f(n): return n % 2 == 0</code> &nbsp; quando chamada com <code>f(9)</code>?",
                options: ["1", "True", "False", "0"],
                correct: 2,
                feedback: "✅ Certo! 9 % 2 = 1, que é diferente de 0, então retorna False."
            },
            {
                q: "Numa função recursiva, o que é o 'caso base'?",
                options: [
                    "A primeira chamada da função",
                    "A condição que PARA a recursão",
                    "O valor retornado no final",
                    "O parâmetro da função"
                ],
                correct: 1,
                feedback: "✅ Exacto! O caso base é a condição de paragem. Sem ele, a função chamaria a si própria infinitamente!"
            }
        ]
    },
    {
        id: 4,
        icon: "🗂️",
        title: "Dicionários",
        sub: "Contagem e mapeamento rápido",
        explanation: `Dicionários mapeiam <strong>chaves para valores</strong> e são incrivelmente úteis em concursos — para contar frequências, agrupar dados, ou fazer lookup em O(1).`,
        code: `<span class="cm"># Criar dicionário</span>
notas = {<span class="st">"João"</span>: <span class="nm">18</span>, <span class="st">"Maria"</span>: <span class="nm">20</span>, <span class="st">"Pedro"</span>: <span class="nm">15</span>}

<span class="cm"># Aceder</span>
<span class="fn">print</span>(notas[<span class="st">"Maria"</span>])   <span class="cm"># 20</span>

<span class="cm"># Adicionar / Atualizar</span>
notas[<span class="st">"Ana"</span>] = <span class="nm">17</span>

<span class="cm"># Contar frequência de letras (padrão de concurso!)</span>
texto = <span class="st">"angola"</span>
freq = {}
<span class="kw">for</span> letra <span class="kw">in</span> texto:
    freq[letra] = freq.<span class="fn">get</span>(letra, <span class="nm">0</span>) <span class="op">+</span> <span class="nm">1</span>

<span class="fn">print</span>(freq)
<span class="cm"># {'a': 2, 'n': 1, 'g': 1, 'o': 1, 'l': 1}</span>

<span class="cm"># Verificar se chave existe</span>
<span class="kw">if</span> <span class="st">"João"</span> <span class="kw">in</span> notas:
    <span class="fn">print</span>(<span class="st">"Existe!"</span>)`,
        tip: "<strong>Dica de concurso:</strong> <code>dict.get(chave, 0)</code> é essencial — retorna 0 se a chave não existir, evitando erros. Perfeito para contagem de frequências!",
        exercises: [
            {
                q: "Dado <code>d = {'a': 3, 'b': 1}</code>, qual é o resultado de <code>d.get('c', 0)</code>?",
                options: ["Erro", "None", "0", "'c'"],
                correct: 2,
                feedback: "✅ Correcto! .get('c', 0) retorna 0 porque 'c' não existe no dicionário."
            },
            {
                q: "Qual estrutura é mais eficiente para contar quantas vezes cada número aparece numa lista?",
                options: [
                    "Lista ordenada",
                    "Dicionário com freq[n] += 1",
                    "Loop duplo comparando",
                    "set() para únicos"
                ],
                correct: 1,
                feedback: "✅ Exacto! Dicionário com freq[n] = freq.get(n, 0) + 1 é O(n) — a forma mais eficiente!"
            }
        ]
    }
];

let currentTopic = 0;
let currentExercise = 0;
let topicsDone = new Array(topics.length).fill(false);
let scores = new Array(topics.length).fill(0);

function renderTabs() {
    const tabs = document.getElementById('topicTabs');
    tabs.innerHTML = topics.map((t, i) => `
    <button class="topic-btn ${i === currentTopic ? 'active' : ''} ${topicsDone[i] ? 'done' : ''}"
      onclick="selectTopic(${i})">
      ${t.icon} ${t.title}
      <span class="check">✓</span>
    </button>
  `).join('');
}

function renderLesson() {
    const t = topics[currentTopic];
    const ex = t.exercises[currentExercise];
    const area = document.getElementById('lessonArea');

    area.innerHTML = `
    <div class="lesson-card">
      <div class="lesson-header">
        <div class="lesson-icon">${t.icon}</div>
        <div>
          <div class="lesson-title">${t.title}</div>
          <div class="lesson-sub">${t.sub}</div>
        </div>
        <div style="margin-left:auto">
          <span class="score-badge">⭐ ${scores[currentTopic]}/${t.exercises.length}</span>
        </div>
      </div>
      <div class="lesson-body">
        <p class="explanation">${t.explanation}</p>

        <div class="code-block">
          <div class="code-header">
            <div class="code-dots">
              <div class="dot dot-r"></div>
              <div class="dot dot-y"></div>
              <div class="dot dot-g"></div>
            </div>
            <span>python</span>
          </div>
          <pre>${t.code}</pre>
        </div>

        ${t.tip ? `<div class="tip-box">💡 ${t.tip}</div>` : ''}

        <div class="exercise-card">
          <div class="exercise-label">🏋️ Exercício ${currentExercise + 1} de ${t.exercises.length}</div>
          <div class="exercise-question">${ex.q}</div>
          <div class="options-grid" id="optionsGrid">
            ${ex.options.map((opt, i) => `
              <button class="option-btn" onclick="answer(${i})" id="opt${i}">
                <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                <code>${opt}</code>
              </button>
            `).join('')}
          </div>
          <div class="feedback" id="feedback"></div>
          <button class="next-btn" id="nextBtn" onclick="nextStep()">
            ${currentExercise < t.exercises.length - 1 ? 'Próximo exercício →' : 'Próximo tópico →'}
          </button>
        </div>
      </div>
    </div>
  `;

    updateProgress();
}

function answer(idx) {
    const t = topics[currentTopic];
    const ex = t.exercises[currentExercise];
    const buttons = document.querySelectorAll('.option-btn');
    const feedback = document.getElementById('feedback');
    const nextBtn = document.getElementById('nextBtn');

    buttons.forEach(b => b.disabled = true);

    if (idx === ex.correct) {
        buttons[idx].classList.add('correct');
        feedback.className = 'feedback show correct-fb';
        feedback.textContent = ex.feedback;
        scores[currentTopic]++;
    } else {
        buttons[idx].classList.add('wrong');
        buttons[ex.correct].classList.add('correct');
        feedback.className = 'feedback show wrong-fb';
        feedback.textContent = `❌ Não era bem isso. A resposta certa era "${ex.options[ex.correct]}". ${ex.feedback}`;
    }

    nextBtn.classList.add('show');
    renderTabs();
}

function nextStep() {
    const t = topics[currentTopic];

    if (currentExercise < t.exercises.length - 1) {
        currentExercise++;
        renderLesson();
    } else {
        topicsDone[currentTopic] = true;
        const nextTopic = topics.findIndex((_, i) => i > currentTopic && !topicsDone[i]);

        if (nextTopic === -1) {
            showCompletion();
        } else {
            selectTopic(nextTopic);
        }
    }
}

function selectTopic(i) {
    currentTopic = i;
    currentExercise = 0;
    renderTabs();
    renderLesson();
}

function showCompletion() {
    const total = scores.reduce((a, b) => a + b, 0);
    const max = topics.reduce((a, t) => a + t.exercises.length, 0);
    document.getElementById('lessonArea').innerHTML = `
    <div class="completion show">
      <div class="completion-icon">🏆</div>
      <h2>Deu jeito!</h2>
      <p>Completaste os tópicos de Python básico.<br>
      Resultado: <strong style="color:var(--accent)">${total} de ${max} respostas certas</strong></p>
      <p style="margin-bottom:24px;color:var(--muted)">Para treinar ainda mais, proucre por <strong style="color:var(--text)">Beecrowd</strong> ou <strong style="color:var(--text)">Codeforces</strong> com problemas reais.</p>
      <button class="restart-btn" onclick="restart()">🔄 Recomeçar</button>
    </div>
  `;
    document.getElementById('topicTabs').innerHTML = '';
    updateProgress();
}

function restart() {
    currentTopic = 0;
    currentExercise = 0;
    topicsDone = new Array(topics.length).fill(false);
    scores = new Array(topics.length).fill(0);
    renderTabs();
    renderLesson();
}

function updateProgress() {
    const done = topicsDone.filter(Boolean).length;
    const pct = (done / topics.length) * 100;
    document.getElementById('progressBar').style.width = pct + '%';
    document.getElementById('progressLabel').textContent = `${done} / ${topics.length} tópicos`;
}

// Init
renderTabs();
renderLesson();
