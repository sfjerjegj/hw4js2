N1
    async function fetchAndCopyData(apiUrl) {
      try {
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error('Ошибка при выполнении запроса');
      }
      
      const data = await response.json();
      
      if (!Array.isArray(data)) {
        throw new Error('API не вернул ожидаемый массив данных');
      }
  
      const first10Elements = data.slice(0, 10);
  
      const last10Elements = data.slice(-10);
  
      return {
        first10: first10Elements,
        last10: last10Elements,
      };
    } catch (error) {
      console.error('Произошла ошибка:', error);
      return null;
    }
  }
  
  const apiUrl = 'https://example.com/api/data'; 
  fetchAndCopyData(apiUrl)
    .then((result) => {
      if (result) {
        console.log('Первые 10 элементов:', result.first10);
        console.log('Последние 10 элементов:', result.last10);
      }
    });
  


N2

    async function fetchDataAndExtractFields(apiUrl) {
        try {
          
          const response = await fetch(apiUrl);
      
          if (!response.ok) {
            throw new Error('Ошибка при выполнении запроса');
          }
      
          const data = await response.json();
      
          if (!Array.isArray(data)) {
            throw new Error('API не вернул ожидаемый массив данных');
          }
      
          const extractedData = data.map((post) => ({
            userId: post.userId,
            title: post.title,
          }));
      
          return extractedData;
        } catch (error) {
          console.error('Произошла ошибка:', error);
          return null;
        }
      }
      
      const apiUr2 = 'https://example.com/api/posts';
      fetchDataAndExtractFields(apiUrl)
        .then((result) => {
          if (result) {
            console.log('Массив с userId и title:', result);
          }
        });
      


N4

        async function fetchDataAndSplitById(apiUrl) {
            try {
              
              const response = await fetch(apiUrl);
          
              if (!response.ok) {
                throw new Error('Ошибка при выполнении запроса');
              }
          
              
              const data = await response.json();
          
              if (!Array.isArray(data)) {
                throw new Error('API не вернул ожидаемый массив данных');
              }
          
              
              const evenIdPosts = [];
              const oddIdPosts = [];
          
              data.forEach((post) => {
                if (post.id % 2 === 0) {
                  evenIdPosts.push(post);
                } else {
                  oddIdPosts.push(post);
                }
              });
          
              return {
                evenId: evenIdPosts,
                oddId: oddIdPosts,
              };
            } catch (error) {
              console.error('Произошла ошибка:', error);
              return null;
            }
          }
          
          
          const apiUr3 = 'https://example.com/api/posts'; 
          fetchDataAndSplitById(apiUrl)
            .then((result) => {
              if (result) {
                console.log('Посты с четными id:', result.evenId);
                console.log('Посты с нечетными id:', result.oddId);
              }
            });
          

N5

            async function fetchDataAndCopyEveryTenth(apiUrl) {
                try {
                  
                  const response = await fetch(apiUrl);
              
                  if (!response.ok) {
                    throw new Error('Ошибка при выполнении запроса');
                  }
              
                
                  const data = await response.json();
              
                  if (!Array.isArray(data)) {
                    throw new Error('API не вернул ожидаемый массив данных');
                  }
              
                 
                  const copiedData = [];
                  for (let i = 0; i < data.length; i += 10) {
                    copiedData.push(data[i]);
                  }
              
                  return copiedData;
                } catch (error) {
                  console.error('Произошла ошибка:', error);
                  return null;
                }
              }
              
              
              const apiUr4 = 'https://example.com/api/data'; 
              fetchDataAndCopyEveryTenth(apiUrl)
                .then((result) => {
                  if (result) {
                    console.log('Копия массива с каждым 10-м элементом:', result);
                  }
                });
              