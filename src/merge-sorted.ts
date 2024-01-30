export function merge(a:number[], b:number[]): number[]{
    const m = a.length;
    const n = b.length;
    let i = 0;
    let j = 0;
    let ans:number[] = [];
    while(i <= m && j <= n){
        if(a[i] <= b[j]){
            ans.push(a[i]);
            i++;
        }
        else{
            ans.push(b[j]);
            j++;
        }
    }
    while(i<=m){
        ans.push(a[i]);
        i++;
    }
    while(j<=n){
        ans.push(b[j]);
        i++;
    }
    
    return ans;

}

export default merge;