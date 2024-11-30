const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Bullet,
		C3.Plugins.Touch,
		C3.Plugins.Touch.Cnds.IsInTouch,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Acts.ScrollY,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Sprite.Acts.SetScale,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Cnds.IsOnScreen
	];
};
self.C3_JsPropNameTable = [
	{стена: 0},
	{Пуля: 0},
	{игрок: 0},
	{Тач: 0},
	{стена2: 0},
	{левая_стена: 0},
	{правая_стена: 0},
	{левая_стена2: 0},
	{правая_стена2: 0}
];

self.InstanceType = {
	стена: class extends self.ISpriteInstance {},
	игрок: class extends self.ISpriteInstance {},
	Тач: class extends self.IInstance {},
	стена2: class extends self.ISpriteInstance {}
}