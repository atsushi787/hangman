#SQLiteをインポート
import sqlite3
#ﾌｧｲﾙを生成する方法
conn = sqlite3.connect('database_name.sqlite')
#ﾒﾓﾘ上に生成する方法
conn = sqlite3.connect(':memory:')
#指定したﾃﾞｰﾀﾍﾞｰｽにｱｸｾｽする。なければ新規にｱｸｾｽする
conn = sqlite3.connect(''database_name.sqlite'') 
#ﾃﾞｰﾀﾍﾞｰｽ操作をできるようにする
curs = conn.cursor()
#SQLを実行
curs.execute("SQL 文")
#実行した SQL は Commite しなければ、保存されません。
conn.commit()
#処理が終われば、処理操作をクローズ
conn.close()
