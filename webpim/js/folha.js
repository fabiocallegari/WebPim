function gerarFolha(event) {
            event.preventDefault();

            // Obtenha o mês, ano e formato de download selecionados
            const mes = document.getElementById('mes').value;
            const ano = document.getElementById('ano').value;
            const formato = document.getElementById('downloadFormat').value;

            // Crie o conteúdo do arquivo, substitua isso pelo conteúdo real da folha de pagamento
            const conteudoFolha = `Folha de Pagamento - ${mes}/${ano}\n\nConteúdo da folha de pagamento...`;

            // Crie um Blob com o conteúdo
            const blob = new Blob([conteudoFolha], { type: 'text/plain' });

            // Crie um objeto URL para o Blob
            const url = URL.createObjectURL(blob);

            // Crie um elemento de link para download
            const linkDownload = document.createElement('a');
            linkDownload.href = url;
            linkDownload.download = `FolhaPagamento_${mes}_${ano}.${formato}`;
            linkDownload.style.display = 'none';

            // Anexe o link ao corpo do documento
            document.body.appendChild(linkDownload);

            // Acione o clique no link
            linkDownload.click();

            // Remova o link do corpo
            document.body.removeChild(linkDownload);

            // Revogue o objeto URL para liberar recursos
            URL.revokeObjectURL(url);
        }